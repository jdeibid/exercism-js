export const toRna = (nucleotides) => {
  let howManyProteins = nucleotides.length > 1
  let nucleotidesSplited = howManyProteins ? nucleotides.split("") : nucleotides
  let result = howManyProteins ? [] : ""

  let transcriber = (protein) => {
    switch (protein){
      case "":
        return ""
      case "C":
        if(howManyProteins){result.push("G");}
        else{result = "G"}
        break;
      case "G":
        if(howManyProteins){result.push("C");}
        else{result = "C"}
        break;
      case "T":
        if(howManyProteins){result.push("A");}
        else{result = "A"}
        break;
      case "A":
        if(howManyProteins){result.push("U");}
        else{result = "U"}
        break;
    }
  }

  if(howManyProteins){nucleotidesSplited.forEach(i => {transcriber(i)})}
  else{transcriber(nucleotidesSplited)}
  return howManyProteins ? result.join("") : result
};