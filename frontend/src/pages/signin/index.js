// import './index.css'
import * as React from 'react';
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://umwgsfamlsuvryazphqp.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtd2dzZmFtbHN1dnJ5YXpwaH' +
    'FwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMzI1NDYsImV4cCI6MjAzNzYwODU0Nn0.lZ8ounHOstgdduhmMpkzf2gbku8Z1vIil55ei44m-QI')

export default function App() {
    const [session, setSession] = useState(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
        return (<div>Logged in!</div>)
    }
}