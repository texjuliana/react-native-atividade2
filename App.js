import React from "react"; // Importação da biblioteca "React"
import {Image,StyleSheet,View,Text} from 'react-native';
import styled from "styled-components/native";

const Header = styled.View`
  flex-direction: row;
  background-color:#FFB6C1;
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:250px;
  height:200px;
  justify-content: center;
  align-items: center;
`;
const Quadrado2 = styled.View`
  background-color:${props => props.cor};
  width:400;
  height:200px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex:1;
 
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB6C1',
    flex: 1,
   
  },
  
  title: {
    color:'#000',
    textAlign: 'center',
    marginTop:15,
    fontSize:30,
  },
  
  });
  
   
  
  function App() { // Função principal
    return ( 
     <Pagina> 
        
      <View style = {styles.container}>
      <Text style = {styles.title}> Galeria de imagem da Juliana Teixeira</Text>
      <Text style = {styles.title}> Tema: Maridos 2d</Text>
    
      
      <Header>
     
     
      <Quadrado>
          
      <Image source={require('./src/imagens/mikey.jpg')}//utilização de imagens internas 
             style={{width: 250, height: 200, backgroundColor: '#AAA'}}
             resizeMode='cover'         
      />
      </Quadrado>
      <Quadrado >
        
      <Image source={require('./src/imagens/usui.jpg')}//utilização de imagens internas 
           style={{width: 250, height: 200, backgroundColor: '#AAA'}}
             resizeMode='cover'         
      />
     
      </Quadrado>
     
      <Quadrado>          
      <Image source={require('./src/imagens/dazai.jpg')}//utilização de imagens internas 
          style={{width: 250, height: 200, backgroundColor: '#AAA'}}
             resizeMode='cover'         
      />
      </Quadrado>  
      <Quadrado>
          
          <Image source={require('./src/imagens/lukas.webp')}//utilização de imagens internas 
                 style={{width: 250, height: 200, backgroundColor: '#AAA'}}
                 resizeMode='cover'         
          />
          </Quadrado> 
          <Quadrado2>
          <Image source={{uri: 'data:image/jpeg;base64,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'}} 
          style={{width: 400, height: 200, backgroundColor: '#AAA'}}
          resizeMode='cover'
          />
      </Quadrado2>   
      </Header>
      </View>
    </Pagina>
  );
}

export default App;