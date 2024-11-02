using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawner : MonoBehaviour
{
    [SerializeField] GameObject[] obs;
    [SerializeField] float freq = 3;
    

    private void Start()
    {
        InvokeRepeating("SpawnObstacle", 1, freq);
        
    }

    private void SpawnObstacle()
    {
        int number = Random.Range(0, obs.Length);
        Instantiate(obs[number], transform.position, Quaternion.identity);
    }
}
