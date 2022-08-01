import { DropDown } from './component/dropdown'
import { Cart } from './component/cart'
import { Fragment } from 'react'

export function Home() {
    return (
        <Fragment>
            <DropDown title='list ip' listItems={['ip1', 'ip11', 'ip2', 'ip3']} />
            <Cart/>
        </Fragment>
    )
}

// export default home