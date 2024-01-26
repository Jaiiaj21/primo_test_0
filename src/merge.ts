export const merge = (collection1: number[], collection2: number[]): number[] => {
    const result: number[] = [];
    let [i, j] = [0, 0]
    while(i < collection1.length || j < collection2.length){
        if(i < collection1.length && j < collection2.length){
            if(collection1[i] < collection2[j]){
                result.push(collection1[i])
                i++;
            }else{
                result.push(collection2[j])
                j++
            }
        }else if(i >= collection1.length && j < collection2.length){
            result.push(collection2[j])
            j++
        }else if(i < collection1.length && j >= collection2.length){
            result.push(collection1[i])
            i++;
        }
    }
    return result
}
