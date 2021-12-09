import { Suspense } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { routes } from "./routes"

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map(({path, Component}) => (
                            <Route key={path} path={path} element={<Component></Component>}/>
                        ))
                    }
                    <Route path='/*' element={<Navigate to='/tareas/' replace/>}/>

                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
