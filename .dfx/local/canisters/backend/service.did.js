export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'checkNews' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
