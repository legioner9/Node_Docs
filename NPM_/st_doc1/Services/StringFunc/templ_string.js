const parse_str = analyse_sir`name ${ user.name } age ${ user.age }`;

function analyse_sir ( strings, ...variables ) {
    return {
        strings,
        variables,
    };
}

debugger;