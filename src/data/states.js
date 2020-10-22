const STATE_DATA = require("./state.json");

function getStateLink(linkType, stateData){
  try {
    var link = stateData[linkType];
    if( link === "" & linkType === "earlyVoteLink" ){
      link = stateData["absenteeLink"];
    }
    return link;
  } catch (er) {
    return "./404";
  }
}

export { STATE_DATA, getStateLink }
