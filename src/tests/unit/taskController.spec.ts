import { CalculateRiskRating, getAllTasks, getOneTask } from '../../controllers/taskController'
import { createRequest, createResponse } from 'node-mocks-http'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected = [
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      }
    ]
    

    // Act
    getAllTasks(req, res)

    // Assert
    expect(res.json()._getData()).toEqual(expected)
  })
})

 
describe('getOneTask', () => {
  test('when id 1 returns the default task', () => {
    // Arrange
    const req = createRequest()
    const res = createResponse()
    const expected =
      {
        id: 1,
        name: 'Mission 01',
        description: 'Chatbot',
        isCompleted: false,
      }
    req.params = { id: '1' }

    // Act
    getOneTask(req, res)

    // Assert
    expect(res.statusCode).toBe(200)
    expect(res.json()._getData()).toEqual(expected)

  })
})

describe('Calculate Risk Rating', () =>{
  /*const inputs=["My only car accident was when I finished turning left, the car behind ended bumping the rear of my car.",
    222222222,
    "",
    "        ",
    "*-/+0(#@|]",
    "Bump and crash",
    "crashcrashcrash",
    "2017 had 97 fatal crashes.",
    null
  ]

  const outputs=["1",
    "Error- not a string",
    "Error- empty string",
    "has only whitespace",
    "Error- doesn't contain a letter",
    "2",
    "3",
    "1"
  ]
  */

  test('what happened',() =>{
    expect(CalculateRiskRating("My only car accident was when I turned left, the car behind ended bumping the rear of my car")).toBe(1);
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
 /*
import { getMockReq, getMockRes } from '@jest-mock/express'

describe('getAllTasks', () => {
  test('should send all tasks via res', () => {
    // Arrange
    const reqMock = getMockReq()
    const { res } = getMockRes()

    // Act
    getAllTasks(reqMock, res)

    // Assert
    expect(res.send).toBeCalledTimes(1)
  })
})
*/
