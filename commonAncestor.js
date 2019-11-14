 const pairs = [
     [2,3],
     [2,5],
     [14,6],
     [14,11],
     [14,12],
     [9,8],
     [6,8],
     [6,4],
     [11,1],
     [11,7],
 ];

 function hasCommonAncestor(array, c1, c2) {

    let hasCommon = false;
    let c1Pairs = [];
    let c2Pairs = [];

    if (array.some(a => a[1] === c1) && array.some(b => b[1] === c2)) {
        array.forEach(pair => {
            if (pair[1] === c1) {
                c1Pairs.push(pair);
            }

            if (pair[1] === c2) {
                c2Pairs.push(pair);
            }
        });
        
        if (c1Pairs && c1Pairs.length && c2Pairs && c2Pairs.length) {
            c1Pairs.some(c1P => {
                if (c2Pairs.some(c2P => c2P[0] === c1P[0])) {
                    hasCommon = true;
                    return;
                } else {
                    for(let i = 0; i < c1Pairs.length; i++) {
                        hasCommon = hasCommonAncestor(array, c1Pairs[i][0], c2);
                    }

                    if (!hasCommon) {
                        for(let i = 0; i < c2Pairs.length; i++) {
                            hasCommon = hasCommonAncestor(array, c2Pairs[i][0], c1);
                        } 
                    }
                }
            });
        }
    } 

    return hasCommon;
 }

 console.log(hasCommonAncestor(pairs, 6, 12)); 





