export const SINGLE_SEAT = "seattemplate-single";
export const WHEELCHAIR_SEAT = "seattemplate-wheelchair";
export const WHEELCHAIR_COMPANION_SEAT = "seattemplate-wheelchair-companion";
export const SOFA_SEAT_LEFT = "seattemplate-sofa-left";
export const SOFA_SEAT_CENTER = "seattemplate-sofa-center";
export const SOFA_SEAT_RIGHT = "seattemplate-sofa-right";
export const BED_SEAT = "seattemplate-bed";
export const RESTRICTED_VIEW_SEAT = "seattemplate-restrictedview";
export const HOLD_SEAT = "seattemplate-hold";

export const SINGLE_SEAT__SELECTED = "seattemplate-single--selected";
export const SOFA_SEAT_LEFT__SELECTED = "seattemplate-sofa-left--selected";
export const SOFA_SEAT_CENTER__SELECTED = "seattemplate-sofa-center--selected";
export const SOFA_SEAT_RIGHT__SELECTED = "seattemplate-sofa-right--selected";
export const BED_SEAT__SELECTED = "seattemplate-bed--selected";
export const HOLD_SEAT__SELECTED = "seattemplate-hold--selected";

export const SCREEN = "seattemplate-screen";

export const templates = {
  [SINGLE_SEAT]: getSingleSeat,
  [SINGLE_SEAT__SELECTED]: getSingleSeatSelected,
  [WHEELCHAIR_SEAT]: getWheelchairSeat,
  [WHEELCHAIR_COMPANION_SEAT]: getWheelchairCompanionSeat,
  [SOFA_SEAT_LEFT]: getSofaLeft,
  [SOFA_SEAT_CENTER]: getSofaCenter,
  [SOFA_SEAT_RIGHT]: getSofaRight,
  [SOFA_SEAT_LEFT__SELECTED]: getSofaLeftSelected,
  [SOFA_SEAT_CENTER__SELECTED]: getSofaCenterSelected,
  [SOFA_SEAT_RIGHT__SELECTED]: getSofaRightSelected,
  [BED_SEAT]: getBed,
  [BED_SEAT__SELECTED]: getBedSelected,
  [RESTRICTED_VIEW_SEAT]: getRestrictedViewSeat,
  [HOLD_SEAT]: getHoldSeat,
  [HOLD_SEAT__SELECTED]: getHoldSeatSelected,
  [SCREEN]: getScreen
};

export function getSeatTemplatePrefixedId(prefix = "", templateId) {
  return `${prefix || ""}${templateId}`;
}

export function getSingleSeat({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SINGLE_SEAT
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V24C27.5 24.8284 26.8284 25.5 26 25.5H8C7.17157 25.5 6.5 24.8284 6.5 24V13Z" />
      <rect x="6.5" y="27.5" width="21" height="4" rx="1.5" />
    </symbol>
  `;
}

export function getSingleSeatSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SINGLE_SEAT__SELECTED
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V27C27.5 29.4853 25.4853 31.5 23 31.5H11C8.51472 31.5 6.5 29.4853 6.5 27V13Z" />
      <path d="M14.9154 24.6567L10.6904 20.4317C10.4365 20.1779 10.4365 19.7664 10.6904 19.5125L11.6096 18.5933C11.8634 18.3394 12.275 18.3394 12.5288 18.5933L15.375 21.4394L21.4712 15.3433C21.725 15.0894 22.1366 15.0894 22.3904 15.3433L23.3096 16.2625C23.5634 16.5163 23.5634 16.9279 23.3096 17.1817L15.8346 24.6568C15.5808 24.9106 15.1692 24.9106 14.9154 24.6567Z" fill="#E9F2FB"/>
    </symbol>
  `;
}

export function getWheelchairSeat({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      WHEELCHAIR_SEAT
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V27C27.5 29.4853 25.4853 31.5 23 31.5H11C8.51472 31.5 6.5 29.4853 6.5 27V13Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3512 15.8155C16.8425 15.7097 17.3292 16.0099 17.4384 16.4859L18.1911 19.768H22.0162C22.3432 19.768 22.6451 19.9377 22.8074 20.2128L24.6298 23.3033C24.8795 23.7267 24.7277 24.2661 24.2908 24.508C23.8538 24.75 23.2972 24.6029 23.0475 24.1795L21.4874 21.5339H17.4601C17.033 21.5339 16.6632 21.2465 16.5706 20.8425L15.6593 16.869C15.5502 16.393 15.8599 15.9213 16.3512 15.8155Z" fill="#E9F2FB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0933 18.002C16.0933 17.5144 16.5012 17.119 17.0045 17.119H18.8269C19.3302 17.119 19.7382 17.5144 19.7382 18.002C19.7382 18.4897 19.3302 18.885 18.8269 18.885H17.0045C16.5012 18.885 16.0933 18.4897 16.0933 18.002Z" fill="#E9F2FB"/>
      <path d="M16.1437 15.3038C16.8892 15.3038 17.4936 14.7181 17.4936 13.9956C17.4936 13.2732 16.8892 12.6875 16.1437 12.6875C15.3981 12.6875 14.7937 13.2732 14.7937 13.9956C14.7937 14.7181 15.3981 15.3038 16.1437 15.3038Z" fill="#E9F2FB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1434 18.7434C15.0426 18.7823 14.9442 18.826 14.8484 18.8744C13.7937 19.4067 13.0662 20.4939 13.0662 21.7549C13.0662 23.5517 14.5377 24.9845 16.323 24.9845C17.8028 24.9845 19.0661 24.002 19.4564 22.6397L21.206 23.1132C20.6074 25.203 18.6562 26.7499 16.323 26.7499C13.5079 26.7499 11.25 24.5005 11.25 21.7549C11.25 19.8198 12.369 18.1366 14.0114 17.3076C14.1612 17.232 14.3155 17.1634 14.4737 17.1024L15.1434 18.7434Z" fill="#E9F2FB"/>
    </symbol>
  `;
}

export function getWheelchairCompanionSeat({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      WHEELCHAIR_COMPANION_SEAT
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V27C27.5 29.4853 25.4853 31.5 23 31.5H11C8.51472 31.5 6.5 29.4853 6.5 27V13Z" />
      <path d="M24.1429 13.4844H22.5357V11.9375C22.5357 11.7477 22.3758 11.5938 22.1786 11.5938H21.8214C21.6242 11.5938 21.4643 11.7477 21.4643 11.9375V13.4844H19.8571C19.6599 13.4844 19.5 13.6383 19.5 13.8281V14.1719C19.5 14.3617 19.6599 14.5156 19.8571 14.5156H21.4643V16.0625C21.4643 16.2523 21.6242 16.4062 21.8214 16.4062H22.1786C22.3758 16.4062 22.5357 16.2523 22.5357 16.0625V14.5156H24.1429C24.3401 14.5156 24.5 14.3617 24.5 14.1719V13.8281C24.5 13.6383 24.3401 13.4844 24.1429 13.4844Z" fill="#E5F0FF"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3512 15.8155C16.8425 15.7097 17.3292 16.0099 17.4384 16.4859L18.1911 19.768H22.0162C22.3432 19.768 22.6451 19.9377 22.8074 20.2128L24.6298 23.3033C24.8795 23.7267 24.7277 24.2661 24.2908 24.508C23.8538 24.75 23.2972 24.6029 23.0475 24.1795L21.4874 21.5339H17.4601C17.033 21.5339 16.6632 21.2465 16.5706 20.8425L15.6593 16.869C15.5502 16.393 15.8599 15.9213 16.3512 15.8155Z" fill="#E9F2FB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0933 18.002C16.0933 17.5144 16.5012 17.119 17.0045 17.119H18.8269C19.3302 17.119 19.7382 17.5144 19.7382 18.002C19.7382 18.4897 19.3302 18.885 18.8269 18.885H17.0045C16.5012 18.885 16.0933 18.4897 16.0933 18.002Z" fill="#E9F2FB"/>
      <path d="M16.1437 15.3038C16.8892 15.3038 17.4936 14.7181 17.4936 13.9956C17.4936 13.2732 16.8892 12.6875 16.1437 12.6875C15.3981 12.6875 14.7937 13.2732 14.7937 13.9956C14.7937 14.7181 15.3981 15.3038 16.1437 15.3038Z" fill="#E9F2FB"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1434 18.7434C15.0426 18.7823 14.9442 18.826 14.8484 18.8744C13.7937 19.4067 13.0662 20.4939 13.0662 21.7549C13.0662 23.5517 14.5377 24.9845 16.323 24.9845C17.8028 24.9845 19.0661 24.002 19.4564 22.6397L21.206 23.1132C20.6074 25.203 18.6562 26.7499 16.323 26.7499C13.5079 26.7499 11.25 24.5005 11.25 21.7549C11.25 19.8198 12.369 18.1366 14.0114 17.3076C14.1612 17.232 14.3155 17.1634 14.4737 17.1024L15.1434 18.7434Z" fill="#E9F2FB"/>
    </symbol>
  `;
}

export function getSofaLeft({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_LEFT
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <path d="M8 27.5H33.5V31.5H8C7.17157 31.5 6.5 30.8284 6.5 30V29C6.5 28.1716 7.17157 27.5 8 27.5Z" />
        <path d="M11 8.5H33.5V25.5H8C7.17157 25.5 6.5 24.8284 6.5 24V13C6.5 10.5147 8.51472 8.5 11 8.5Z" />
        <rect x="33.5" y="8.5" width="34" height="17" />
        <rect x="33.5" y="27.5" width="34" height="4" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getSofaLeftSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_LEFT__SELECTED
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <path d="M11 8.5H33.5V31.5H11C8.51472 31.5 6.5 29.4853 6.5 27V13C6.5 10.5147 8.51472 8.5 11 8.5Z" />
        <rect x="33.5" y="8.5" width="34" height="23"/>
        <path d="M17.9154 24.6567L13.6904 20.4317C13.4365 20.1779 13.4365 19.7663 13.6904 19.5124L14.6096 18.5932C14.8634 18.3393 15.275 18.3393 15.5288 18.5932L18.375 21.4393L24.4712 15.3432C24.725 15.0894 25.1366 15.0894 25.3904 15.3432L26.3096 16.2624C26.5634 16.5163 26.5634 16.9278 26.3096 17.1817L18.8346 24.6567C18.5808 24.9105 18.1692 24.9105 17.9154 24.6567V24.6567Z" fill="#E9F2FB"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getSofaCenter({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_CENTER
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <path d="M33.5 27.5H60C60.8284 27.5 61.5 28.1716 61.5 29V30C61.5 30.8284 60.8284 31.5 60 31.5H33.5V27.5Z" />
        <path d="M33.5 8.5H57C59.4853 8.5 61.5 10.5147 61.5 13V24C61.5 24.8284 60.8284 25.5 60 25.5H33.5V8.5Z" />
        <rect x="-0.5" y="8.5" width="34" height="17" />
        <rect x="-0.5" y="27.5" width="34" height="4" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getSofaCenterSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_CENTER__SELECTED
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <rect width="34" height="40" fill="white" stroke="white"/>
        <path d="M33.5 8.5H57C59.4853 8.5 61.5 10.5147 61.5 13V27C61.5 29.4853 59.4853 31.5 57 31.5H33.5V8.5Z" />
        <rect x="-0.5" y="8.5" width="34" height="23" />
        <path d="M14.9154 24.6567L10.6904 20.4317C10.4365 20.1779 10.4365 19.7663 10.6904 19.5124L11.6096 18.5932C11.8634 18.3393 12.275 18.3393 12.5288 18.5932L15.375 21.4393L21.4712 15.3432C21.725 15.0894 22.1366 15.0894 22.3904 15.3432L23.3096 16.2624C23.5634 16.5163 23.5634 16.9278 23.3096 17.1817L15.8346 24.6567C15.5808 24.9105 15.1692 24.9105 14.9154 24.6567V24.6567Z" fill="#E9F2FB"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getSofaRight({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_RIGHT
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <path d="M-0.5 27.5H26C26.8284 27.5 27.5 28.1716 27.5 29V30C27.5 30.8284 26.8284 31.5 26 31.5H-0.5V27.5Z" />
        <path d="M-0.5 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V24C27.5 24.8284 26.8284 25.5 26 25.5H-0.5V8.5Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getSofaRightSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SOFA_SEAT_RIGHT__SELECTED
    )}" viewBox="0 0 34 40" preserveAspectRatio="none">
      <g clip-path="url(#clip0)">
        <path d="M-0.5 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V27C27.5 29.4853 25.4853 31.5 23 31.5H-0.5V8.5Z" />
        <path d="M11.9154 24.6567L7.69037 20.4317C7.43654 20.1779 7.43654 19.7663 7.69037 19.5124L8.60959 18.5932C8.86342 18.3393 9.275 18.3393 9.52883 18.5932L12.375 21.4393L18.4712 15.3432C18.725 15.0894 19.1366 15.0894 19.3904 15.3432L20.3096 16.2624C20.5634 16.5163 20.5634 16.9278 20.3096 17.1817L12.8346 24.6567C12.5808 24.9105 12.1692 24.9105 11.9154 24.6567V24.6567Z" fill="#E9F2FB"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="34" height="40" fill="white"/>
        </clipPath>
      </defs>
    </symbol>
  `;
}

export function getBed({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      BED_SEAT
    )}" viewBox="0 0 34 58">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V42C27.5 42.8284 26.8284 43.5 26 43.5H8C7.17157 43.5 6.5 42.8284 6.5 42V13Z" />
      <rect x="6.5" y="45.5" width="21" height="4" rx="1.5"/>
    </symbol>
  `;
}

export function getBedSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      BED_SEAT__SELECTED
    )}" viewBox="0 0 34 58">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V45C27.5 47.4853 25.4853 49.5 23 49.5H11C8.51472 49.5 6.5 47.4853 6.5 45V13Z"/>
      <path d="M14.9154 33.6567L10.6904 29.4317C10.4365 29.1779 10.4365 28.7664 10.6904 28.5125L11.6096 27.5933C11.8634 27.3394 12.275 27.3394 12.5288 27.5933L15.375 30.4394L21.4712 24.3433C21.725 24.0894 22.1366 24.0894 22.3904 24.3433L23.3096 25.2625C23.5634 25.5163 23.5634 25.9279 23.3096 26.1817L15.8346 33.6568C15.5808 33.9106 15.1692 33.9106 14.9154 33.6567Z" fill="#E9F2FB" />
    </symbol>
  `;
}

export function getRestrictedViewSeat({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      RESTRICTED_VIEW_SEAT
    )}" viewBox="0 0 34 40">
      <path d="M11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V24C27.5 24.8284 26.8284 25.5 26 25.5H8C7.17157 25.5 6.5 24.8284 6.5 24V13C6.5 10.5147 8.51472 8.5 11 8.5Z" fill="white"/>
      <rect x="6.5" y="27.5" width="21" height="4" rx="1.5" fill="white"/>
      <path d="M17 28H26C26.5523 28 27 28.4477 27 29V30C27 30.5523 26.5523 31 26 31H17V28Z" />
      <path d="M17 9H23C25.2091 9 27 10.7909 27 13V24C27 24.5523 26.5523 25 26 25H17V9Z" />
    </symbol>
  `;
}

export function getHoldSeat({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      HOLD_SEAT
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V24C27.5 24.8284 26.8284 25.5 26 25.5H8C7.17157 25.5 6.5 24.8284 6.5 24V13Z" />
      <rect x="6.5" y="27.5" width="21" height="4" rx="1.5" />
      <rect x="21.5" y="3.5" width="11" height="11" rx="5.5" stroke="white" stroke-width="3"/>
    </symbol>
  `;
}

export function getHoldSeatSelected({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      HOLD_SEAT__SELECTED
    )}" viewBox="0 0 34 40">
      <path d="M6.5 13C6.5 10.5147 8.51472 8.5 11 8.5H23C25.4853 8.5 27.5 10.5147 27.5 13V27C27.5 29.4853 25.4853 31.5 23 31.5H11C8.51472 31.5 6.5 29.4853 6.5 27V13Z"/>
      <rect x="21.5" y="3.5" width="11" height="11" rx="5.5" stroke="white" stroke-width="3"/>
      <path d="M14.9154 24.6567L10.6904 20.4317C10.4365 20.1779 10.4365 19.7663 10.6904 19.5124L11.6096 18.5932C11.8634 18.3393 12.275 18.3393 12.5288 18.5932L15.375 21.4393L21.4712 15.3432C21.725 15.0894 22.1366 15.0894 22.3904 15.3432L23.3096 16.2624C23.5634 16.5163 23.5634 16.9278 23.3096 17.1817L15.8346 24.6567C15.5808 24.9105 15.1692 24.9105 14.9154 24.6567Z" fill="#E9F2FB" />
    </symbol>
  `;
}

export function getScreen({ prefix } = {}) {
  return `
    <symbol id="${getSeatTemplatePrefixedId(
      prefix,
      SCREEN
    )}" viewBox="0 0 1020 30">
      <rect x="1020" y="30" width="1020" height="30" rx="5" transform="rotate(180 1020 30)" fill="#E9EDEF"/>
      <path d="M488.801 12.3636H489.994C489.94 10.8274 488.523 9.67898 486.554 9.67898C484.605 9.67898 483.074 10.8125 483.074 12.5227C483.074 13.8949 484.068 14.7102 485.659 15.1676L486.912 15.5256C487.986 15.8239 488.94 16.2017 488.94 17.2159C488.94 18.3295 487.866 19.0653 486.455 19.0653C485.241 19.0653 484.168 18.5284 484.068 17.375H482.795C482.915 19.0455 484.267 20.179 486.455 20.179C488.801 20.179 490.134 18.8864 490.134 17.2358C490.134 15.3267 488.324 14.7102 487.27 14.4318L486.236 14.1534C485.48 13.9545 484.267 13.5568 484.267 12.4631C484.267 11.4886 485.162 10.7727 486.514 10.7727C487.747 10.7727 488.682 11.3594 488.801 12.3636ZM500.354 13C499.976 10.9119 498.306 9.67898 496.257 9.67898C493.652 9.67898 491.763 11.6875 491.763 14.9091C491.763 18.1307 493.652 20.1392 496.257 20.1392C498.306 20.1392 499.976 18.9062 500.354 16.8182H499.121C498.823 18.2301 497.61 18.9858 496.257 18.9858C494.408 18.9858 492.956 17.554 492.956 14.9091C492.956 12.2642 494.408 10.8324 496.257 10.8324C497.61 10.8324 498.823 11.5881 499.121 13H500.354ZM502.346 20H503.579V16.0227H505.806C505.896 16.0227 505.98 16.0227 506.065 16.0178L508.213 20H509.645L507.343 15.794C508.64 15.3516 509.247 14.2926 509.247 12.9403C509.247 11.1406 508.173 9.81818 505.787 9.81818H502.346V20ZM503.579 14.9091V10.9119H505.747C507.397 10.9119 508.034 11.7173 508.034 12.9403C508.034 14.1634 507.397 14.9091 505.767 14.9091H503.579ZM511.301 20H517.526V18.9062H512.534V15.446H517.128V14.3523H512.534V10.9119H517.446V9.81818H511.301V20ZM519.669 20H525.893V18.9062H520.901V15.446H525.495V14.3523H520.901V10.9119H525.813V9.81818H519.669V20ZM536.11 9.81818H534.896V17.8324H534.797L529.229 9.81818H528.036V20H529.269V12.0057H529.368L534.916 20H536.11V9.81818Z" fill="#343A40"/>
    </symbol>
  `;
}

export function getAllSeatTemplates(props) {
  return Object.keys(templates).reduce(function (map, key) {
    map[key] = templates[key](props);
    return map;
  }, {});
}
