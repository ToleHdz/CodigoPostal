function peticion()
{
    var getCodigo = document.getElementById('postal').value

    $.ajax(
    {
        url: `/postal/${getCodigo}`,
        type: 'GET',
        dataType: 'json',
        success: (data) => 
        {
        	if (data[0] !== undefined)
        	{
        		console.log(data)
        		Colonias(data[0].Colonia)
        		Origen(data[0].Municipio, data[0].Estado)
        		abrirModal()
        	}
        	else
        	{
        		alert('No hay Resultados')
        	}
        }
    });
}

function cerrarModal()
{
    document.getElementById('modal').style.display='none'
}

function abrirModal()
{
	document.getElementById('modal').style.display='block'
}

function Colonias(data)
{
	let texto = "Colonias Encontradas:\n\n"

	let colonias = data.split(';')

	for(var i = 0; i < colonias.length; i++)
	{
		texto += colonias[i] + "\n"
	}

	document.getElementById('colonias').innerText = texto
}

function Origen(municipio, estado)
{
	let texto = `${municipio}, ${estado}`;

	document.getElementById('lugar').innerText = texto
}