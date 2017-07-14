import {Injectable} from '@angular/core'
import {PlayersInterface} from './playersschema'
@Injectable()
export class PlayersService
{
    getPlayers(): PlayersInterface[]
    {
       return [
            {
       "playername":"Msdhoni(c)",
       "noofmatches":295,
       "runsscored":9885,
       "average"   :55.543,
       "strikerate":89.2876,
        "imageUrl": "http://images.deccanchronicle.com/dc-Cover-cs0flrrd6e052ss27vp415g9e4-20161023011300.Medi.jpeg"
    },
    {
        "playername":"Virat",
       "noofmatches":185,
       "runsscored":7885,
       "average"   :65.234,
       "strikerate":90.578,
        "imageUrl": "http://starsunfolded.1ygkv60km.netdna-cdn.com/wp-content/uploads/2015/01/Virat-Kohli-1.jpg"
    },
    {
         "playername":"Ajinkya",
       "noofmatches":85,
       "runsscored":3885,
       "average"   :45.151,
       "strikerate":90.4578,
        "imageUrl": "http://www.indianlink.com.au/wp-content/uploads/2016/01/Ajinkya-Rahane-2.png"
    },
       ]
    }
}