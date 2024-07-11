import React from 'react';
import useUsers from './handler/getUserHandler';

export function Users() {
    const users = useUsers();

    return (
        <div className="my-10 mx-10">
            <h1 className="text-2xl mb-6">Users</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">ID</th>
                        <th className="py-2">Username</th>
                        <th className="py-2">Email</th>
                        <th className="py-2">Roles</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td className="py-2">{user._id}</td>
                            <td className="py-2">{user.username}</td>
                            <td className="py-2">{user.email}</td>
                            <td className="py-2">{user.roles.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
