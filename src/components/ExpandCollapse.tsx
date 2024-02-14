import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const ExpandCollapse = ({isExpand}:{isExpand: boolean}) => {
    return(
        isExpand ? <ExpandLess /> : <ExpandMore />
    )
}

export default ExpandCollapse