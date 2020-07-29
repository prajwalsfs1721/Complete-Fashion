import React,{Component} from 'react';
import SHOP_DATA from './shoppage.data';
import {PreviewCollection} from '../../component/preview-component/previewcollection';
class ShopPage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            collections:SHOP_DATA
        };
    }
    render (){
        const {collections}=this.state;
        return (
            <div className='shop-page'>
                Shop page
                {collections.map((collection)=><PreviewCollection key={collection.id} {...collection}/>)}
            </div>
        );
    }

}
export default ShopPage;