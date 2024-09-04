import React from 'react'
import { Search, User } from 'lucide-react'

export default function Navbar({ userName }) {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">SÓ TI ESTÁGIOS</a>
                <form class="d-flex justify-content-center" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit"><Search /></button>
                </form>
                <div className='profile-infos d-flex'>
                    <User/>
                    {userName}
                </div>
            </div>
        </nav>
    </div>
  )
}
