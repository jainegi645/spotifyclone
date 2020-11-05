export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after developing 
    //token:"BQBFCIKhELsOHmjOV14zHo8ZsvdhW_rg_DCZHOquRBLCXfGMoM…-fDqwAngSVwxQO4_8XCj7fEhRPCDqzvPoOJR7vQX9_qSK0rli"
};
const reducer = (state,action) =>{
console.log(action);


switch(action.type){
    case 'SET_USER':
    return{
        ...state,
        user:action.user,
    };
    case 'SET_TOKEN':
    return{
        ...state,
        token:action.token
    };
    case 'SET_PLAYLISTS':
    return{
        ...state,
        playlists:action.playlists,
    };
    case 'SET_DISCOVER_WEEKLY':
    return{
        ...state,
        discover_weekly: action.discover_weekly,
    };
    default:
    return state;
}
}
export default reducer;