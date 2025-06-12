'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import { NavigationHeaderProps } from './NavigationHeader.types'

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, title, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-150 ease-in-out hover:bg-accent hover:text-brand-700 focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}>
                        <div className="text-md font-medium leading-none">{title}</div>
                    </a>
                </NavigationMenuLink>
            </li>
        )
    }
)

ListItem.displayName = 'ListItem'

function NavigationHeader({ logo, navs, buttonLink }: NavigationHeaderProps) {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNavOpened = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <section className="sticky top-0 z-50 bg-color-haiti">
            <nav className="container flex items-center justify-between py-6">
                <div className="flex items-start">
                    <Link className="block max-w-max" href="/">
                        <Image width={172} height={73} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="hidden justify-center lg:flex">
                    <ul className="flex w-full items-center justify-stretch gap-4">
                        {navs?.map(({ text, link }, index) => {
                            const isLastItem = index === navs.length - 1

                            return (
                                <li key={`nav-desk-${index}`}>
                                    {isLastItem ? (
                                        <Button
                                            className="rounded-md bg-gradient-to-r from-color-studio to-color-persianBlue px-6 py-2 text-white transition-all duration-300 ease-in-out hover:from-[#6f2db9] hover:to-[#2a2fa6]"
                                            onClick={() => (window.location.href = link)}>
                                            {text}
                                        </Button>
                                    ) : (
                                        <NavigationMenu>
                                            <NavigationMenuList>
                                                <NavigationMenuItem>
                                                    <NavigationMenuTrigger className="bg-color-haiti text-base text-color-blue">
                                                        <span>{text}</span>
                                                    </NavigationMenuTrigger>
                                                </NavigationMenuItem>
                                            </NavigationMenuList>
                                        </NavigationMenu>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button className="navbar-burger lg:hidden" onClick={toggleNavOpened}>
                    <svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect className="text-gray-800" width="32" height="32" rx="6" fill="currentColor"></rect>
                        <path
                            className="text-gray-300"
                            d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z"
                            fill="currentColor"></path>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                onClick={() => toggleNavOpened()}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        toggleNavOpened()
                    }
                }}
                role="button"
                tabIndex={0}
                className={`fixed -left-full top-0 duration-200 ease-in-out ${
                    isNavOpen && 'translate-x-full'
                } size-full bg-secondary bg-opacity-50`}
            />
            <div className="navbar-menu z-50">
                <div
                    className={`fixed -left-[672px] top-0 duration-200 ease-in-out ${
                        isNavOpen && 'translate-x-[672px]'
                    } bottom-0 w-4/6 max-w-xs bg-secondary`}>
                    <nav className="relative h-full overflow-y-auto p-6">
                        <div className="flex h-full flex-col justify-between">
                            <Link className="inline-block" href="/">
                                <Image width={172} height={73} src={logo} alt="logo" />
                            </Link>
                            <ul className="py-6">
                                {navs?.map(({ text, link }, index) => {
                                    const isLastItem = index === navs.length - 1
                                    return (
                                        <li key={`nav-mobile-${index}`}>
                                            {isLastItem ? (
                                                <Button
                                                    className="rounded-md bg-purple-700 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:bg-purple-800"
                                                    onClick={() => (window.location.href = link)}>
                                                    {text}
                                                </Button>
                                            ) : (
                                                <Link
                                                    passHref
                                                    onClick={() => setIsNavOpen(false)}
                                                    className="block rounded-md px-4 py-3 font-medium text-gray-300 hover:bg-secondary hover:text-white"
                                                    href={link}
                                                    scroll={false}>
                                                    {text}
                                                </Link>
                                            )}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex flex-wrap"></div>
                        </div>
                    </nav>
                    <button className="navbar-close absolute right-3 top-5 p-4" onClick={() => setIsNavOpen(false)}>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.94004 5.99988L11.14 1.80655C11.2002 1.74195 11.2483 1.66656 11.2811 1.5839C11.3138 1.50124 11.3307 1.41294 11.3307 1.32384C11.3307 1.23475 11.3138 1.14645 11.2811 1.06379C11.2483 0.981133 11.2002 0.905743 11.14 0.841133C11.0143 0.715505 10.8443 0.642387 10.6667 0.642387C10.489 0.642387 10.319 0.715505 10.1934 0.841133L6.00004 5.04113L1.80671 0.841133C1.68108 0.715505 1.51101 0.642387 1.33337 0.642387C1.15573 0.642387 0.98566 0.715505 0.860037 0.841133C0.73441 0.96676 0.661293 1.13683 0.661293 1.31447C0.661293 1.49211 0.73441 1.66218 0.860037 1.78781L5.06004 5.99988L0.860037 10.1932C0.799837 10.2578 0.751686 10.3332 0.718922 10.4158C0.686159 10.4985 0.669311 10.5868 0.669311 10.6759C0.669311 10.765 0.686159 10.8532 0.718922 10.9359C0.751686 11.0186 0.799837 11.094 0.860037 11.1586C0.98566 11.2842 1.15573 11.3573 1.33337 11.3573C1.51101 11.3573 1.68108 11.2842 1.80671 11.1586L6.00004 6.95988L10.1934 11.1586C10.2579 11.2188 10.3333 11.2669 10.4159 11.2997C10.4986 11.3324 10.5869 11.3493 10.676 11.3493C10.7651 11.3493 10.8534 11.3324 10.936 11.2997C11.0187 11.2669 11.0941 11.2188 11.1543 11.1586C11.2145 11.094 11.2664 11.0186 11.2992 10.9359C11.332 10.8532 11.3489 10.765 11.3489 10.6759C11.3489 10.5868 11.332 10.4985 11.2992 10.4158C11.2664 10.3332 11.2145 10.2578 11.1543 10.1932L6.94004 5.99988Z"
                                fill="#D2D2D2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NavigationHeader
