'use client'

import { Provider } from "react-redux"
import store from '../redux/store'
interface ReduxProviderProps {
    children: React.ReactNode
}

export default function ReduxProvider(props: ReduxProviderProps) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}