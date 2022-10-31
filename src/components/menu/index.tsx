import React, { useState } from "react";
import * as S from "./styles"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PrintIcon from '@mui/icons-material/Print';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DnsIcon from '@mui/icons-material/Dns';
import AddIcon from '@mui/icons-material/Add';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import StorageIcon from '@mui/icons-material/Storage';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [id, setId] = useState(0);
    const routes = [{
        id: 1,
        label: 'Gerenciar Tickets',
        icon: <SupportAgentIcon/>,
        to: 'tickets'
    }, {
        id: 2,
        label: 'Novo Ticket',
        icon: <AddIcon/>,
        to: 'newTicket'
    }, {
        id: 3,
        label: 'Gerenciar Membros',
        icon: <Diversity1Icon/>,
        to: 'members'
    }, {
        id: 4,
        label: 'Adicionar Membro',
        icon: <GroupAddIcon/>,
        to: 'newMember'
    }, {
        id: 5,
        label: 'Dispositivos de Rede',
        icon: <StorageIcon/>,
        to: 'devices'
    }, {
        id: 6,
        label: 'Datacenter Dashboard',
        icon: <LeaderboardIcon/>,
        to: 'dashboard'
    }, {
        id: 7,
        label: 'Visualizar Impressoras',
        icon: <PrintIcon/>,
        to: 'printers'
    }, {
        id: 8,
        label: 'Nagios Core',
        icon: <DnsIcon/>,
        to: 'nagios'
    }];
    return(
        <S.Nav>
            <ul className={open === true ? 'open' : 'close'}>
                <li>
                    {open ? (
                        <CloseIcon onClick={() => setOpen(false)} className="menu"/>
                    ) : (
                        <MenuIcon onClick={() => setOpen(!open)} className="menu"/>
                    )}
                </li>
                {routes.map((route, index) => (
                    <li 
                        key={index} 
                        onClick={(event: React.MouseEvent<HTMLElement>) => {setId(route.id)}}
                    >
                        <Link 
                            to={route.to}
                            className={ id === route.id ? 'focused' : ''}
                        >
                            {route.icon}
                            <p>{route.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </S.Nav>
    ); 
}

export default Menu;