export const LANDING_PAGE_OPTION_SELECTED = 'LANDING_PAGE_OPTION_SELECTED';

export function selectBook(option){
  console.log('An option has been selected: ' + option.title);
  //selectBook is an action creator => it needs to return an action (i.e. an object with a type property)
  return {
    type: 'LANDING_PAGE_OPTION_SELECTED',
    payload: option
  };
}
