import { CanDeactivateFn } from '@angular/router';

export const pageHasChangesGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
 if(!component.hasChanges){
  return true;
 }else{
  alert('plz save the changes')
  return false;
 }
};
