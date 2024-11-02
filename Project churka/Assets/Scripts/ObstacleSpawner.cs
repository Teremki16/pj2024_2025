using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleSpawner : MonoBehaviour
{
    [SerializeField] GameObject[] ObstacleObject;
    [SerializeField] float freq = 3;

    private void SpawnObstacle()
    {
        int n = Random.Range(0, ObstacleObject.Length - 1);
        Instantiate(ObstacleObject[n], transform.position, Quaternion.identity);
    }
    private void Start()
    {
        InvokeRepeating("SpawnObstacle", 1,freq);
    }


}
