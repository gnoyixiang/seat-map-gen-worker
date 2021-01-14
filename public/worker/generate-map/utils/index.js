import { SCREEN_DISTANCE, SCREEN_HEIGHT, SCREEN_ID } from "./config.js";
import { mapAreas, mapSeatsByAreaRowCol } from "./mapping.js";
import {
  getAllSeatTemplates,
  SCREEN,
  SINGLE_SEAT,
  WHEELCHAIR_SEAT,
  WHEELCHAIR_COMPANION_SEAT,
  HOLD_SEAT,
  BED_SEAT,
  RESTRICTED_VIEW_SEAT,
  SINGLE_SEAT__SELECTED,
  HOLD_SEAT__SELECTED,
  BED_SEAT__SELECTED,
  SOFA_SEAT_LEFT,
  SOFA_SEAT_RIGHT,
  SOFA_SEAT_CENTER,
  SOFA_SEAT_LEFT__SELECTED,
  SOFA_SEAT_RIGHT__SELECTED,
  SOFA_SEAT_CENTER__SELECTED,
  getSeatTemplatePrefixedId
} from "./seat-templates.js";

// seats should be rendered starting from bottom-right
// similar to being rendered from top-left and rotated 180 deg

export default function generate(
  data,
  {
    seatTemplatePrefix,
    scale,
    vbScaleFactor,
    screenDistance,
    screenHeight,
    reverse = true
  } = {}
) {
  const mappedSeats = mapSeatsByAreaRowCol(data.seats);
  const mappedAreas = mapAreas(data.areas, {
    scale,
    vbScaleFactor,
    screenDistance,
    screenHeight,
    reverse
  });
  const drawedAreas = mappedAreas.map((area) => {
    const seats = mappedSeats[area.number];
    return drawArea(area, seats, { reverse, seatTemplatePrefix });
  });
  const screen = drawScreen(mappedAreas, {
    reverse,
    screenDistance,
    screenHeight,
    seatTemplatePrefix
  });
  return createSvgMap(drawedAreas, mappedAreas, screen, { seatTemplatePrefix });
}

function createSvgMap(
  children = [],
  mappedAreas,
  screen,
  { seatTemplatePrefix } = {}
) {
  const { viewBox } = (mappedAreas && mappedAreas[0]) || {};
  const { x, y, width, height } = viewBox;
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" ',
    'xmlns:xlink="http://www.w3.org/1999/xlink" ',
    `viewBox="${x} ${y} ${width} ${height}" `,
    ">",
    '<g id="layer-seats">',
    '<g id="seats">',
    children.join(""),
    "</g>",
    "</g>",
    screen,
    "</svg>",
    '<svg xmlns="http://www.w3.org/2000/svg" ',
    'style="display:none" ',
    ">",
    appendSeatSymbols({ prefix: seatTemplatePrefix }),
    "</svg>"
  ].join("");
}

function appendSeatSymbols({ prefix } = {}) {
  return Object.values(getAllSeatTemplates({ prefix })).join("");
}

function drawScreen(
  mappedAreas,
  {
    screenId = SCREEN_ID,
    screenHeight = SCREEN_HEIGHT,
    screenDistance = SCREEN_DISTANCE,
    reverse = true,
    seatTemplatePrefix
  } = {}
) {
  console.log({ mappedAreas });
  const { boundaryArea } = (mappedAreas && mappedAreas[0]) || {};
  return [
    "<use",
    `href="#${getSeatTemplatePrefixedId(seatTemplatePrefix, SCREEN)}"`,
    `id="${screenId}"`,
    `x="${boundaryArea.left}"`,
    `y="${reverse ? boundaryArea.top + screenDistance : boundaryArea.bottom}"`,
    `height="${screenHeight}"`,
    `width="${boundaryArea.right - boundaryArea.left}"`,
    'xmlSpace="preserve"',
    "/>"
  ].join(" ");
}

function drawArea(
  mappedArea,
  seats,
  { reverse = true, seatTemplatePrefix } = {}
) {
  const { boundaryArea } = mappedArea || {};
  const content = [];
  const {
    top,
    left,
    rowCount,
    columnCount,
    height: areaHeight,
    width: areaWidth
  } = mappedArea;
  const cellHeight = areaHeight / rowCount;
  const cellWidth = areaWidth / columnCount;
  const areaY = reverse ? boundaryArea.height - top - areaHeight : top;
  const areaX = reverse ? boundaryArea.width - left - areaWidth : left;

  // begin area
  for (let row = 0; row < rowCount; row++) {
    const targetRow = reverse ? rowCount - row - 1 : row;
    if (!seats[targetRow] || !Object.keys(seats[targetRow]).length) {
      continue;
    }
    const group = ["<g>"];
    // begin row
    for (let col = 0; col < columnCount; col++) {
      const targetCol = reverse ? columnCount - col - 1 : col;
      const cellX = areaX + col * cellWidth;
      const cellY = areaY + row * cellHeight;
      const targetSeat = seats[targetRow][targetCol];
      // begin col
      if (targetSeat) {
        group.push(
          renderSeat(
            targetSeat,
            {
              x: cellX,
              y: cellY,
              height: cellHeight,
              width: cellWidth
            },
            seatTemplatePrefix
          )
        );
      }
    }
    group.push("</g>");
    content.push(group.join(""));
  }
  return content.join("");
}

function renderSeat(seat, cell, seatTemplatePrefix) {
  const { x, y, height, width } = cell;
  const { svgId, areaNumber } = seat;
  const templateId = getSeatTemplatePrefixedId(
    seatTemplatePrefix,
    getSeatTemplateId(seat)
  );

  return [
    "<use",
    `href="#${templateId}"`,
    `id="${svgId}"`,
    `x="${x}"`,
    `y="${y}"`,
    `height="${height}"`,
    `width="${width}"`,
    'xmlSpace="preserve"',
    // testing fills and stroke override
    areaNumber === 1
      ? 'style="fill: #67A6E4; stroke: #1B5998;"'
      : 'style="fill: #FFC34C; stroke: #996600;"',
    "/>"
  ].join(" ");
}

function getSeatTemplateId(seat) {
  const { attributes } = seat;

  if (attributes.indexOf("wheelchair") >= 0) {
    return WHEELCHAIR_SEAT;
  }
  if (attributes.indexOf("companion") >= 0) {
    return WHEELCHAIR_COMPANION_SEAT;
  }
  // add more attrubutes handling
  return SINGLE_SEAT;
  // return SINGLE_SEAT__SELECTED;
  // return WHEELCHAIR_COMPANION_SEAT;
  // return WHEELCHAIR_SEAT;
  // return SOFA_SEAT_RIGHT;
  // return SOFA_SEAT_RIGHT__SELECTED;
  // return SOFA_SEAT_LEFT;
  // return SOFA_SEAT_LEFT__SELECTED;
  // return SOFA_SEAT_CENTER;
  // return SOFA_SEAT_CENTER__SELECTED;
  // return HOLD_SEAT;
  // return HOLD_SEAT__SELECTED;
  // return BED_SEAT;
  // return BED_SEAT__SELECTED;
  // return RESTRICTED_VIEW_SEAT;
}
