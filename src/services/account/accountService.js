import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { checkJwtAction, loginAction, logoutAction } from '../../actions/accountActions';
import { LOGIN, REGISTER } from './graphqlQM';


export const accountService = ()=>{
    
    const useLogin = ({setErrorMessage, data, setData}) =>{
        const dispatch = useDispatch();

        return useMutation(LOGIN,{
            onError: (error) => {
                if(error.graphQLErrors){
                    if(error.graphQLErrors.length>0)setErrorMessage(error.graphQLErrors[0].message);
                }
                else setErrorMessage("Error con el servidor");
                setData({
                    ...data,
                    password : ""
                });
            },
            onCompleted: (info) => {
                if(info.login.data.accessToken){
                    window.localStorage.setItem(
                        'userToken', info.login.data.accessToken
                    )
                    dispatch(loginAction(info.login.data.accessToken));
                }
                setData({
                    username : "",
                    password : "",
                });
            }
        });;
    };

    const useLogout = () =>{
        const dispatch = useDispatch();
        return () => dispatch(logoutAction());
    };

    const useCheckJWT = () =>{
        const dispatch = useDispatch();
        return () => dispatch(checkJwtAction());
    };

    const useRegister = ({setErrorMessage, setSuccessMessage, setData}) =>{
        return useMutation(REGISTER,{
            onError: (error) => {
                if(error.graphQLErrors){
                    if(error.graphQLErrors.length>0)setErrorMessage(error.graphQLErrors[0].message);
                }
                else setErrorMessage("Error con el servidor");
                setData({
                    username : "",
                    full_name : "",
                    email : "",
                    password : "",
                    r_password : "",
                });
            },
            onCompleted: (info) => {
                setSuccessMessage(info.register.message);
                setData({
                    username : "",
                    full_name : "",
                    email : "",
                    password : "",
                    r_password : "",
                });
            }
        });;
    };

    return{
        useLogin,
        useLogout,
        useCheckJWT,
        useRegister,
    }
}