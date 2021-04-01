import axios from '../axios/axios';

const useConfirm = (message = "", event, abort) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      event();
    } else {
      abort();
    }
  };
  return confirmAction;
};
 
export default useConfirm;
