import Home from './Home'
import Animate from './Animate'

import AnimateContent from './AnimateContent'

import Basis from './Basis'
import Frames from './Frame'
import Tween from './Tween'
import Pause from './Pause'
import Rule from './Rule'
import Bezier from './Bezier'
import Smooth from './Smooth'
import Recommend from './Recommend'

export default [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/animate',
        component: Animate,
        name: 'animate',
        children: [
            // {
            //     path: '/',
            //     component: AnimateContent,
            // },
            {
                path: 'basis/:p',
                component: Basis,
            },
            {
                path: 'frame/:p',
                component: Frames,
            },
            {
                path: 'tween/:p',
                component: Tween,
            },
            {
                path: 'pause/:p',
                component: Pause,
            },
            {
                path: 'rule',
                component: Rule,
            },
            {
                path: 'bezier/:p',
                component: Bezier,
            },
            {
                path: 'smooth/:p',
                component: Smooth
            },
            {
                path: 'recommend',
                component: Recommend
            }
        ]
    }
]
