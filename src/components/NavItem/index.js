import styled from "styled-components";
import Link from "next/link";

const ListItem = styled.li`

    color: ${({ isActive }) => (isActive ? '#f7f5ff' : 'white)')};
    border-bottom: ${({ isActive }) => (isActive ? '2px solid #7250e9' : 'none)')};

    &:hover  {
        color: #f7f5ff;
        border-bottom: 2px solid #7250e9;
    }
`

export default function NavItem({ url, label }) {

    return (
        <ListItem>
            <Link href={url}>
                {label}
            </Link>
        </ListItem>
    );
}