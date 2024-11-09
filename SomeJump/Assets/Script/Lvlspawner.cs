using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Lvlspawner : MonoBehaviour
{

    [SerializeField] GameObject[] platform;
    [SerializeField] int numofblocks = 10;
    private Vector3 spawnPos = new Vector3();

    [SerializeField] float minx, maxx, miny, maxy;
    

    private void SpawnPlatform(GameObject obj)
    {
        spawnPos.x = Random.Range(minx,maxx);
        spawnPos.y += Random.Range(miny,maxy);
        Instantiate(obj, spawnPos, Quaternion.identity);
    }

    private void Start()
    {
        for (int i = 0; i < numofblocks; i++)
        {
            if (Random.Range(0, 101) > 50)
            {
                SpawnPlatform(platform[Random.Range(4,platform.Length)] );
            }
            else if (Random.Range(0, 50) >25)
            {
                SpawnPlatform(platform[0]);
            }
            else if (Random.Range(0, 25) > 12)
            {
                SpawnPlatform(platform[1]);
            }
            else if (Random.Range(0, 12) > 6)
            {
                SpawnPlatform(platform[2]);
            }
            else 
            {
                SpawnPlatform(platform[3]);
            }

        }
    }
}
