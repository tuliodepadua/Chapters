export const Types = {
    PGLOAD: "login/TOOGLE_PGLOAD"
}

const INITIAL_STATE = {
    pgload: "open",
}
  
export default function pgload(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PGLOAD:
      return {
        ...state,
        pgload: action.pgload,
      };
      break;

    default:
      break;
  }
  return state;
}

  export const Creators = {
    togglePGLOAD : (module, pgload) => ({
            type: Types.PGLOAD,
            module,
            pgload,        
    })
};