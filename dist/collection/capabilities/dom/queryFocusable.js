export const queryFocusable = element => [].slice.call(element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
export const queryTabbable = element => [].slice.call(element.querySelectorAll(':not([tabindex="-1"])'));
