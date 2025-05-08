import React from 'react';
import styled from 'styled-components';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<DesktopNav>
					<NavLinkWrapper>
						<NavLink href='/sale'>Sale</NavLink>
						<BoldNavLink href='/sale'>Sale</BoldNavLink>
					</NavLinkWrapper>
					<NavLinkWrapper>
						<NavLink href='/new'>New&nbsp;Releases</NavLink>
						<BoldNavLink href='/new'>New&nbsp;Releases</BoldNavLink>
					</NavLinkWrapper>
					<NavLinkWrapper>
						<NavLink href='/men'>Men</NavLink>
						<BoldNavLink href='/men'>Men</BoldNavLink>
					</NavLinkWrapper>
					<NavLinkWrapper>
						<NavLink href='/women'>Women</NavLink>
						<BoldNavLink href='/women'>Women</BoldNavLink>
					</NavLinkWrapper>
					<NavLinkWrapper>
						<NavLink href='/kids'>Kids</NavLink>
						<BoldNavLink href='/kids'>Kids</BoldNavLink>
					</NavLinkWrapper>
					<NavLinkWrapper>
						<NavLink href='/collections'>Collections</NavLink>
						<BoldNavLink href='/collections'>Collections</BoldNavLink>
					</NavLinkWrapper>
				</DesktopNav>
				<MobileActions>
					<ShoppingBagButton>
						<Icon id='shopping-bag' />
						<VisuallyHidden>Open cart</VisuallyHidden>
					</ShoppingBagButton>
					<UnstyledButton>
						<Icon id='search' />
						<VisuallyHidden>Search</VisuallyHidden>
					</UnstyledButton>
					<UnstyledButton onClick={() => setShowMobileMenu(true)}>
						<Icon id='menu' />
						<VisuallyHidden>Open menu</VisuallyHidden>
					</UnstyledButton>
				</MobileActions>
				<Filler />
			</MainHeader>

			<MobileMenu isOpen={showMobileMenu} onDismiss={() => setShowMobileMenu(false)} />
		</header>
	);
};

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	border-bottom: 1px solid var(--color-gray-300);
	overflow: auto;

	@media ${QUERIES.tabletAndSmaller} {
		justify-content: space-between;
		align-items: center;
		border-top: 4px solid var(--color-gray-900);
	}

	@media ${QUERIES.phoneAndSmaller} {
		padding-left: 16px;
		padding-right: 16px;
	}
`;

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
	margin: 0px 48px;
	overflow: hidden;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

const MobileActions = styled.div`
	display: none;

	@media ${QUERIES.tabletAndSmaller} {
		gap: 32px;
		display: flex;
	}

	@media ${QUERIES.phoneAndSmaller} {
		gap: 16px;
	}
`;

const LogoWrapper = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		flex: revert;
	}
`;

const ShoppingBagButton = styled(UnstyledButton)`
	transform: translateX(-2px);
`;

const Filler = styled.div`
	flex: 1;

	@media ${QUERIES.tabletAndSmaller} {
		display: none;
	}
`;

var NavLinkWrapper = styled.div`
	position: relative;
	color: var(--color-gray-900);
	&:first-of-type {
		color: var(--color-secondary);
	}

	&:hover ${NavLink} {
		transform: translateY(-100%);
	}

	&:hover ${BoldNavLink} {
		transform: translateY(-100%);
	}

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 500ms;

		&:hover {
			transition: transform 250ms;
		}
	}
`;

var NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: ${WEIGHTS.medium};
	color: inherit;
`;

var BoldNavLink = styled(NavLink)`
	font-weight: ${WEIGHTS.bold};
	position: absolute;
	left: 0;
	transform: translateY(100%);
`;

export default Header;
