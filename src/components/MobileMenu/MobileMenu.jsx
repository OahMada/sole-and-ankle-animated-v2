import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<DialogRoot open={isOpen} onOpenChange={onDismiss}>
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
						<NavLink href='/sale' $index={0}>
							Sale
						</NavLink>
						<NavLink href='/new' $index={1}>
							New&nbsp;Releases
						</NavLink>
						<NavLink href='/men' $index={2}>
							Men
						</NavLink>
						<NavLink href='/women' $index={3}>
							Women
						</NavLink>
						<NavLink href='/kids' $index={4}>
							Kids
						</NavLink>
						<NavLink href='/collections' $index={5}>
							Collections
						</NavLink>
					</Nav>
					<Footer>
						<SubLink href='/terms'>Terms and Conditions</SubLink>
						<SubLink href='/privacy'>Privacy Policy</SubLink>
						<SubLink href='/contact'>Contact Us</SubLink>
					</Footer>
				</Content>
			</Dialog.Portal>
		</DialogRoot>
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

var doorShut = keyframes`
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
`;

var DialogRoot = styled(Dialog.Root)`
	perspective: 250px;
	transform-style: preserve-3d;
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

	/* @media (prefers-reduced-motion: no-preference) {
		animation: ${slideIn} 500ms cubic-bezier(0.23, 0.59, 0.32, 1.17) forwards;
	} */

	width: 300px;
	animation: ${doorShut} 500ms;
	transform-origin: right;
	transform-style: preserve-3d;
`;

const CloseButton = styled(UnstyledButton)`
	position: absolute;
	top: 10px;
	right: 0;
	padding: 16px;
	/* transform: translateX(-12.5px); */
`;

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;

	transform-style: preserve-3d;
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

	/* animation: ${fadeIn} 1000ms backwards;
	animation-delay: 200ms; */

	/* @media (prefers-reduced-motion: no-preference) {
		animation-delay: calc(200ms + ${({ $index }) => $index * 50}ms);
	} */
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

	transform-style: preserve-3d;
`;

const SubLink = styled.a`
	color: var(--color-gray-700);
	font-size: 0.875rem;
	text-decoration: none;

	/* animation: ${fadeIn} 1000ms backwards;
	animation-delay: 200ms; */
`;

export default MobileMenu;
