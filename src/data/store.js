import { reactive } from 'vue';

export const store = reactive({
  apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php',
  typeUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php',
  cardList: [],
  research:'',
  isLoading: false,
  archetypeList: []
})