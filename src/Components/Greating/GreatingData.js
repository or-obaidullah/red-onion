import adultBlur from '../../images/Other/adult-blur.png';
import architecture from '../../images/Other/architecture.png';
import cookFood from '../../images/Other//cookFood.png';
import { AiFillCar} from 'react-icons/ai';
import { FaBabyCarriage} from 'react-icons/fa';
import { IoIosNotificationsOutline} from 'react-icons/io';

const greatingData = [
    {
        image:adultBlur,
        title: 'Fast Delivery',
        icon:  <AiFillCar />      
    },
    {
        image:cookFood,
        title: 'A Good Auto Responder',
        icon:  <IoIosNotificationsOutline />      
    },
    {
        image:architecture,
        title: 'Home Delivery',
        icon:  <FaBabyCarriage />      
    }
]
export default greatingData;