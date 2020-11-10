import {htttp} from './config'

export default {
    listar:() => {
        return htttp.get('users')
    },
    salvar:(user) => {
        return htttp.post('users',user)
    }
}