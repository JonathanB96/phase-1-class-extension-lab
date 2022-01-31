// Your code here
class Polygon{
    constructor(arr){
        this.arr = arr
    }
    get countSides(){
        return this.arr.length
    }
    get perimeter(){
        let sum = 0
        for(let el of this.arr){
            sum+=el
        }
        return sum
    }


}
class Triangle extends Polygon {
 get isValid(){
    let a = this.arr[0]
    let b = this.arr[1]
    let c = this.arr[2]
   const con1 = a + b > c;
   const con2 = b + c > a;
   const con3 = c + a > b;
   return con1 && con2 && con3  

}
}

class Square extends Polygon{
    get isValid(){
        let el = this.arr[0]
        let sum = 0
        for(let i of this.arr){
            sum+=i
        }
        return el === sum/4
        
    }

    get area(){
        let side = this.arr[0]
        return side*side
        
}
}