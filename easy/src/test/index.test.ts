import { sum } from "../index.js"; 
import {describe, expect, test} from '@jest/globals'; 

describe('sum',()=>{
    test('should add two positive number',()=>{
        const ans = sum(1,2) 
        expect(ans).toBe(3)
    })
 
    test('should add two negative number',()=>{
        const ans = sum(-1,-2) 
        expect(ans).toBe(-3)
    })
   
    test('should add one negative number and one postive  number',()=>{
        const ans = sum(-1,2) 
        expect(ans).toBe(1)
    })
 
    test('should add two 0  ',()=>{
        const ans = sum(0,0) 
        expect(ans).toBe(0)
    })
})