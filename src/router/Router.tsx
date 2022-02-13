import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RoutingPaths } from './constants'
import Home from '../pages/Home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutingPaths.home} element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
