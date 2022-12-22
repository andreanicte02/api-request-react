import React from 'react'
import AppFoodLoader from './FoodLoader'

export default function AppFood() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

        }}>
            <AppFoodLoader />

        </div>
    )
}
