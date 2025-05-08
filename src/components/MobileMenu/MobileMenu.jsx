import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Dialog.Root open={isOpen} onOpenChange={onDismiss}>
			<Dialog.Portal>
				<Overlay />
				<Content>
					<CloseButton onClick={onDismiss}>
						<Icon id='close' />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</CloseButton>
					<VisuallyHidden>
						<Dialog.Title>Mobile navigation</Dialog.Title>
						<Dialog.Description>Mobile navigation</Dialog.Description>
					</VisuallyHidden>
					<Filler />
					<Nav>
						<NavLink href='/sale'>Sale</NavLink>
						<NavLink href='/new'>New&nbsp;Releases</NavLink>
						<NavLink href='/men'>Men</NavLink>
						<NavLink href='/women'>Women</NavLink>
						<NavLink href='/kids'>Kids</NavLink>
						<NavLink href='/collections'>Collections</NavLink>
					</Nav>
					<Footer>
						<SubLink href='/terms'>Terms and Conditions</SubLink>
						<SubLink href='/privacy'>Privacy Policy</SubLink>
						<SubLink href='/contact'>Contact Us</SubLink>
					</Footer>
				</Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

var fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

var slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(4%);
  }
`;

const Overlay = styled(Dialog.Overlay)`
	position: fixed;
	inset: 0;
	background: var(--color-backdrop);
	animation: ${fadeIn} 400ms;
`;

const Content = styled(Dialog.Content)`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: white;
	/* 96% of 312.5px is 300px */
	width: 312.5px;
	height: 100%;
	padding: 24px 32px;
	display: flex;
	flex-direction: column;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${slideIn} 500ms cubic-bezier(0.23, 0.59, 0.32, 1.17) forwards;
	}
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
	transform: translateX(-12.5px);
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;

	animation: ${fadeIn} 400ms;
`;

const NavLink = styled.a`
	color: var(--color-gray-900);
	font-weight: ${WEIGHTS.medium};
	text-decoration: none;
	font-size: 1.125rem;
	text-transform: uppercase;

	&:first-of-type {
		color: var(--color-secondary);
	}

	animation: ${fadeIn} 1000ms backwards;
	animation-delay: 200ms;
`;

const Filler = styled.div`
	flex: 1;
`;
const Footer = styled.footer`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 14px;
	justify-content: flex-end;
`;

const SubLink = styled.a`
	color: var(--color-gray-700);
	font-size: 0.875rem;
	text-decoration: none;

	animation: ${fadeIn} 1000ms backwards;
	animation-delay: 200ms;
`;

export default MobileMenu;
