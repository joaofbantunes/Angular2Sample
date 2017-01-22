using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CodingMilitia.Angular2Sample
{
    [Route("api/[controller]")]
    public class RandomController : Controller
    {
        [HttpGet]
        public Task<IEnumerable<string>> Get(){
            return Task.FromResult(new []{"x", "y", "z"} as IEnumerable<string>);
        }
    }
}