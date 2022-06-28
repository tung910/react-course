import React from 'react';

type Props = { data: [] };

const PlayItem = ({ data }: Props) => {
    return Array(10)
        .fill('')
        .map((item, index) => {
            return (
                <tr
                    key={index}
                    className="transition duration-300 py-3 ease-in-out hover:bg-[#ffff] cursor-pointer hover:shadow"
                >
                    <td className="px-4 text-lg text-center py-2 font-medium text-gray-900 whitespace-nowrap">
                        {index + 1}
                    </td>
                    <td className="px-4 text-lg py-2 text-center text-gray-700 whitespace-nowrap">
                        24/05/1995
                    </td>
                    <td className="px-4 text-lg py-2 text-center text-gray-700 whitespace-nowrap">
                        Web Developer
                    </td>
                    <td className="px-4 text-lg py-2 text-center text-gray-700 whitespace-nowrap">
                        $120,000
                    </td>
                    <td className="px-4 text-lg py-2 text-center text-gray-700 whitespace-nowrap">
                        $120,000
                    </td>
                </tr>
            );
        });
};

export default PlayItem;
