import {
  SCALE,
  SCREEN_DISTANCE,
  SCREEN_HEIGHT,
  VIEWBOX_SCALE_FACTOR
} from "./config.js";

export function mapSeatsByAreaRowCol(seats) {
  return (
    seats &&
    seats.reduce(function (map, seat) {
      if (seat.position) {
        const { areaNum, rowNum, colNum } = seat.position;
        map[areaNum] = map[areaNum] || {};
        map[areaNum][rowNum] = map[areaNum][rowNum] || {};
        map[areaNum][rowNum][colNum] = seat;
      }
      return map;
    }, {})
  );
}

export function mapAreas(
  areas,
  {
    scale = SCALE,
    vbScaleFactor,
    screenDistance = SCREEN_DISTANCE,
    screenHeight = SCREEN_HEIGHT,
    reverse = true
  } = {}
) {
  if (!areas) {
    return areas;
  }
  const mappedAreas = mapAreaWithViewBox(
    mapAreaWithBoundary(
      mapAreasWithScale(areas, {
        scale,
        screenDistance,
        screenHeight,
        reverse
      })
    ),
    { vbScaleFactor, reverse }
  );
  return mappedAreas;
}

export function mapAreasWithScale(
  areas,
  {
    scale = SCALE,
    screenDistance = SCREEN_DISTANCE,
    screenHeight = SCREEN_HEIGHT,
    reverse = true
  } = {}
) {
  return areas.map((area) => {
    return {
      ...area,
      top: area.top * scale + screenDistance * 2 + screenHeight,
      left: area.left * scale,
      width: area.width * scale,
      height: area.height * scale
    };
  });
}

export function mapAreaWithBoundary(scaledAreas) {
  const boundaryArea = getBoundaryArea(scaledAreas);

  return scaledAreas.map((area) => {
    return {
      ...area,
      boundaryArea
    };
  });
}

export function mapAreaWithViewBox(
  mappedAreas,
  { vbScaleFactor, reverse = true } = {}
) {
  const viewBox = getViewBox(mappedAreas, { vbScaleFactor, reverse });

  return mappedAreas.map((area) => {
    return {
      ...area,
      viewBox
    };
  });
}

export function getBoundaryArea(mappedAreas) {
  return (
    mappedAreas &&
    mappedAreas.reduce(
      function (boundary, area) {
        const areaTop = area.top;
        const areaLeft = area.left;
        const areaWidth = area.width;
        const areaHeight = area.height;
        return {
          top: areaTop < boundary.top ? areaTop : boundary.top,
          left: areaLeft < boundary.left ? areaLeft : boundary.left,
          bottom:
            areaTop + areaHeight > boundary.bottom
              ? areaTop + areaHeight
              : boundary.bottom,
          right:
            areaLeft + areaWidth > boundary.right
              ? areaLeft + areaWidth
              : boundary.right,
          height:
            areaHeight + areaTop * 2 > boundary.height
              ? areaHeight + areaTop * 2
              : boundary.height,
          width:
            areaWidth + areaLeft * 2 > boundary.width
              ? areaWidth + areaLeft * 2
              : boundary.width
        };
      },
      {
        left: Infinity,
        top: Infinity,
        bottom: 0,
        right: 0,
        height: 0,
        width: 0
      }
    )
  );
}

export function getViewBox(
  mappedAreas = [],
  { vbScaleFactor = VIEWBOX_SCALE_FACTOR, reverse = true } = {}
) {
  const viewBox = mappedAreas.reduce(
    function (vb, area) {
      const areaWidth = area.width;
      const areaHeight = area.height;
      const areaTop = reverse
        ? area.boundaryArea.height - area.top - areaHeight
        : area.top;
      const areaLeft = reverse
        ? area.boundaryArea.width - area.left - areaWidth
        : area.left;
      return {
        top: areaTop < vb.top ? areaTop : vb.top,
        left: areaLeft < vb.left ? areaLeft : vb.left,
        bottom:
          areaTop + areaHeight > vb.bottom ? areaTop + areaHeight : vb.bottom,
        right: areaLeft + areaWidth > vb.right ? areaLeft + areaWidth : vb.right
      };
    },
    { top: Infinity, left: Infinity, bottom: 0, right: 0 }
  );
  return {
    y: viewBox.top - ((viewBox.bottom - viewBox.top) * (vbScaleFactor - 1)) / 2,
    x:
      viewBox.left - ((viewBox.right - viewBox.left) * (vbScaleFactor - 1)) / 2,
    height: (viewBox.bottom - viewBox.top) * vbScaleFactor,
    width: (viewBox.right - viewBox.left) * vbScaleFactor
  };
}
