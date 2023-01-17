import PhoneIcon from '@mui/icons-material/Phone';
import PaidIcon from '@mui/icons-material/Paid';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const content = [
    {
        id: 1,
        icon: <LocalShippingIcon fontSize="large" />,
        header: "Free Shipping",
        content: "We offer free shipping anywhere in the continental US!",
        link: "Learn More"
    },
    {
        id: 2,
        icon: <PaidIcon fontSize="large"/>,
        header: "100% Money Back Guarantee",
        content: "If you don't love what you bought, we guarantee that we will refund your money completely! None of that store credit nonsense.",
        link: "Learn More"
    },
    {
        id: 3,
        icon: <PhoneIcon fontSize="large"/>,
        header: "Online Support 24/7",
        content: "We are here to help you night and day, whatever you need.",
        link: "Learn More"
    },
];

export default content;