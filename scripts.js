function tabuadaDeDez() {
    let tabuada = []
    const n = 10
        for(i = 0; i <= n; i++) {
            tabuada.push([i])
            for(j = 0; j <=n; j++) {
                
                tabuada[i][j] = j*i
            
            }
        }
        
        console.table(tabuada)
}

// Função bônus

function tabuadaDinamica(n) {
    let tabuada = []
    
        for(i = 0; i <= n; i++) {
            tabuada.push([i])
            for(j = 0; j <=n; j++) {
                
                tabuada[i][j] = j*i
            
            }
        }
        
        console.table(tabuada)
}