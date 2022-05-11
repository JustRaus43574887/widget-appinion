export const videoEndpoint = "https://api.appinion.digital";
export const apiEndpoint = "https://api.appinion.digital/graphql";
export const query = `query videoWidget($id: String!) {
  videoWidget(id: $id) {
     _id
    projectId
    userId
		type
		location
		staButton
		staText
		staLink
		name
		position
		mainColor
		textColor
		utmLabel
  	videos {
      id
      filename
      mimetype
      path
    }
    createdAt
    tariffType
  }
}`;
