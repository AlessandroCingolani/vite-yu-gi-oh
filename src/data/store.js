import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=150&offset=0',
  typeUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php',
  cardList: [],
  research:null,
  isLoading: false,
  archetypeList: []
})