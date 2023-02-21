import React , { useContext , useState , useEffect  } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  position : absolute;
  z-index : 999;
  top : 40px;
  width : 96%;
  margin-left : 2%;
`;


export const Search = () => {
  const [searchKeyword , setSearchKeyword] = useState(null);

  // useEffect(()=> {
  //   search(searchKeyword);
  // },[])



  return(
    <SearchContainer>
      <Searchbar
        placeholder = "What are you looking for ?"
        icon = "mosque"
        value={searchKeyword}
        onSubmitEddiing= {() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
}