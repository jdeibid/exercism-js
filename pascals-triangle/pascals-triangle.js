export const rows = (triangleHeight) => {

  if(triangleHeight == 0){return []}

  let pascalsTriangle = [[1]]

  for(let i = 1; i<triangleHeight; i++){
    let row = []

    for(let j = 0; j<=i; j++){
      let previousLeft = pascalsTriangle[i-1][j-1]
      let previousRight = pascalsTriangle[i-1][j]
      row.push( (previousLeft + previousRight) || 1 )
    }

    pascalsTriangle.push(row)
  }

  return pascalsTriangle
};