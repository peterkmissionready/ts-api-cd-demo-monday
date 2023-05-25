import { CalculateRiskRating, } from '../../controllers/RiskCalculator'


describe('Calculate Risk Rating', () =>{

  test('what happened',() =>{

    //Arrange
    let input = "My only car accident was when I turned left, the car behind ended bumping the rear of my car";
    
    //Act
    let result = CalculateRiskRating(input)
    let correctAnswer=1;
    
    //Assert
    expect(result).toBe(correctAnswer);
  });
  
  test('Numbers only',() =>{
      expect(CalculateRiskRating(22222)).toBe("Error- not a string");
  });
  test('empty string',() =>{
      expect(CalculateRiskRating("")).toBe("Error- empty string");
  });
  
  test('Whitespace only',() =>{
      expect(CalculateRiskRating("        ")).toBe("Error- has only whitespace");
  });
  test('No letters',() =>{
    expect(CalculateRiskRating("*-/+0(#@|]\\")).toBe("Error- doesn't contain a letter");
  });
  
  test('Title of a movie',() =>{
    expect(CalculateRiskRating("bump and crash")).toBe(2);
  });
  
  test('expect not a string',() =>{
    expect(CalculateRiskRating(null)).toBe("Error- not a string");
  });



})
